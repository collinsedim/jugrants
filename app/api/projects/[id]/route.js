// import { prisma } from "../../../../lib/prisma";

import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

// Delete single Project
export const DELETE = async (req) => {
  //   const { id } = await req.json();

  //   const { searchParams } = new URL(req.url);
  //   const id = searchParams.get("id");

  const { id } = req.json();

  const getSingleProject = await prisma.project.findFirst({
    where: {
      id: id,
    },
  });

  try {
    if (!getSingleProject) {
      return new Response(
        JSON.stringify({ message: "Project does not exist" }),
        {
          status: 404,
        }
      );
    }

    // Delete One project if ID matches

    await prisma.project.delete({
      where: {
        id: getSingleProject.id,
      },
    });

    return new Response(
      JSON.stringify({
        message: `${getSingleProject.title} sucessfully deleted!`,
      })
    );

    // End delete One project if ID matches
  } catch (error) {
    console.log("Error deleting project", error);

    return new Response(
      JSON.stringify({ error: "Failed to delete project. Please retry!" })
    );
  }
};
