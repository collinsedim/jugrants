// import { PrismaClient } from "@prisma/client";
// const prisma = new PrismaClient();
import { prisma } from "../../../../lib/prisma";

export const POST = async (req) => {
  const { email, statusIdentity } = await req.json();

  try {
    const project = await prisma.project.findFirst({
      where: {
        statusId: statusIdentity,
        owner: {
          email: email,
        },
      },
      include: {
        owner: true,
        category: true,
        grantStatus: true,
      },
    });

    if (project) {
      return new Response(JSON.stringify(project), { status: 200 });
    }

    return new Response(JSON.stringify({ error: "No Project found" }), {
      status: 404,
    });
  } catch (error) {
    return new Response(
      JSON.stringify({ error: "Something went wrong, retry!" }),
      {
        status: 400,
      }
    );
  }
};
