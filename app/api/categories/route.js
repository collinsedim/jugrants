// Use this import statement after completing this route
import { prisma } from "../../../lib/prisma";

// fetch all categories
export const GET = async () => {
  const category = await prisma.category.findMany();

  if (category.length === 0) {
    return new Response(JSON.stringify({ message: "No categories found!" }));
  }

  return new Response(JSON.stringify(category), { status: 200 });
};

// Create new category
export const POST = async (req) => {
  const { name } = await req.json();

  try {
    const newCategory = await prisma.category.create({ data: { name } });

    return new Response(JSON.stringify(newCategory), {
      status: 201,
    });
  } catch (error) {
    console.log("an error occured", error);
  }
};

// Delete any existing category
export const DELETE = async (req) => {
  const { id } = await req.json();

  const dbId = await prisma.category.findFirst({
    where: {
      id: id,
    },
  });

  if (!dbId) {
    return new Response(
      JSON.stringify({ message: "Category does not exist" }),
      { status: 404 }
    );
  }

  await prisma.category.delete({
    where: { id: id },
    select: {
      name: true,
    },
  });

  return new Response(JSON.stringify({ message: "category deleted" }), {
    status: 201,
  });
};

// update category name
export const PATCH = async (req) => {
  const { id, name } = await req.json();

  const category = await prisma.category.findFirst({
    where: { id: id },
  });

  if (category.name === name)
    return new Response(JSON.stringify({ message: "No changes made" }), {
      status: 201,
    });

  if (category !== null) {
    const updatedCategory = await prisma.category.update({
      where: { id: id },
      data: {
        name: name,
      },
    });

    return new Response(JSON.stringify(updatedCategory), { status: 200 });
  }

  return new Response(JSON.stringify({ message: "Category does not exist" }), {
    status: 404,
  });
};

// GET()
//   .catch((e) => {
//     console.error(e.message);
//   })
//   .finally(async () => {
//     await prisma.$disconnect();
//   });
