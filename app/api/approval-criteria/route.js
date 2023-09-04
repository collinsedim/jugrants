// Use this import statement after completing this route
import { prisma } from "../../../lib/prisma";

// import { PrismaClient } from "@prisma/client";
// const prisma = new PrismaClient();

// fetch all approval criteria
export const GET = async () => {
  const approvalCriteria = await prisma.approvalCriteria.findMany();

  if (approvalCriteria.length === 0) {
    return new Response(
      JSON.stringify({ error: "No approval criteria found!" }),
      {
        status: 404,
      }
    );
  }

  return new Response(JSON.stringify(approvalCriteria), { status: 200 });
};

// Create new approvalCriteria
export const POST = async (req) => {
  const { title, description } = await req.json();

  try {
    const newApapprovalCriteria = await prisma.approvalCriteria.create({
      data: { title, description },
    });

    return new Response(JSON.stringify(newApapprovalCriteria), {
      status: 201,
    });
  } catch (error) {
    console.log("an error occured", error);
  }
};

// Delete any existing approvalCriteria
export const DELETE = async (req) => {
  const { id } = await req.json();

  const dbId = await prisma.approvalCriteria.findFirst({
    where: {
      id: id,
    },
  });

  if (!dbId) {
    return new Response(JSON.stringify({ error: "Criteria does not exist" }), {
      status: 404,
    });
  }

  await prisma.approvalCriteria.delete({
    where: { id: id },
    select: {
      title: true,
    },
  });

  return new Response(JSON.stringify({ message: "Criteria deleted" }), {
    status: 201,
  });
};

// update approvalCriteria name
export const PATCH = async (req) => {
  const { id, title, description } = await req.json();

  const approvalCriteria = await prisma.approvalCriteria.findFirst({
    where: { id: id },
  });

  if (
    approvalCriteria.title === title &&
    approvalCriteria.description === description
  )
    return new Response(JSON.stringify({ message: "No changes made" }), {
      status: 201,
    });

  if (approvalCriteria !== null) {
    const updatedApapprovalCriteria = await prisma.approvalCriteria.update({
      where: { id: id },
      data: {
        title: title,
      },
    });

    return new Response(JSON.stringify(updatedApapprovalCriteria), {
      status: 200,
    });
  }

  return new Response(JSON.stringify({ error: "Criteria does not exist" }), {
    status: 404,
  });
};
