// Use this import statement after completing this route
import { prisma } from "../../../lib/prisma";

// import { PrismaClient } from "@prisma/client";
// const prisma = new PrismaClient();

import { nanoid } from "nanoid";

const statusId = nanoid();

// fetch all projects
export const GET = async () => {
  const project = await prisma.project.findMany({
    include: {
      category: true,
      owner: true,
      grantStatus: true,
    },
  });

  if (project.length === 0) {
    return new Response(JSON.stringify({ message: "No projects found!" }));
  }

  return new Response(JSON.stringify(project), { status: 200 });
};

// Create new project
export const POST = async (req) => {
  const {
    title,
    category,
    description,
    startAmount,
    endAmount,
    purpose,
    execution,
    paymentStructure,
    projectId,
  } = await req.json();

  const checkProjectTitleExists = await prisma.project.findFirst({
    where: { title: title },
  });

  // console.log("Category Data", category);

  try {
    if (!checkProjectTitleExists) {
      const newProject = await prisma.project.create({
        data: {
          title,
          description,
          startAmount,
          endAmount,
          purpose,
          execution,
          paymentStructure,
          statusId,
          category: {
            connect: {
              id: category,
            },
          },
          owner: {
            connect: {
              id: projectId,
            },
          },
          grantStatus: {
            connect: {
              title: "Open" || "open",
            },
          },
        },
      });

      return new Response(JSON.stringify(newProject), {
        status: 201,
      });
    }

    return new Response(
      JSON.stringify({
        error:
          "Project already exists. If you think this is an error, please contact JuGrants team!",
      }),
      { status: 400 }
    );
  } catch (error) {
    console.log("an error occured", error);
  }
};

// Delete All projects,
// export const DELETE = async (req) => {
//   const getAllProjects = await prisma.project.findMany({});

//   try {
//     // Delete all projects if any exists
//     if (getAllProjects.length !== 0) {
//       await prisma.project.deleteMany({});

//       return new Response(
//         JSON.stringify({ message: "All projects deleted!" }),
//         {
//           status: 200,
//         }
//       );
//     }

//     return new Response(JSON.stringify({ error: "No projects to delete" }), {
//       status: 404,
//     });
//   } catch (error) {
//     console.log("Project delete error:", error);

//     return new Response(JSON.stringify({ message: "No projects to delete" }), {
//       status: 404,
//     });
//   }
// };

// Delete single projects
export const DELETE = async (req) => {
  const { id } = await req.json();

  const dbId = await prisma.project.findFirst({
    where: {
      id: id,
    },
  });

  try {
    if (!dbId) {
      return new Response(JSON.stringify({ error: "Project does not exist" }), {
        status: 404,
      });
    }

    await prisma.project.delete({
      where: { id: id },
      select: {
        title: true,
      },
    });

    return new Response(JSON.stringify({ message: "project deleted" }), {
      status: 201,
    });
  } catch (error) {
    console.log("An error occured deleting this project", error);

    return new Response(
      JSON.stringify({ error: "An error occured deleting this project" }),
      {
        status: 500,
      }
    );
  }
};

// update project name
export const PATCH = async (req) => {
  const {
    id,
    title,
    category,
    description,
    startAmount,
    endAmount,
    purpose,
    execution,
    paymentStructure,
  } = await req.json();

  const project = await prisma.project.findFirst({
    where: { id: id },
  });

  //   if (project.title === title)
  //     return new Response(JSON.stringify({ message: "No changes made" }), {
  //       status: 201,
  //     });

  if (project !== null) {
    const updatedProject = await prisma.project.update({
      where: { id: id },
      data: {
        title: title,
        category: category,
        description: description,
        startAmount: startAmount,
        endAmount: endAmount,
        purpose: purpose,
        execution: execution,
        paymentStructure: paymentStructure,
      },
    });

    return new Response(JSON.stringify(updatedProject), { status: 200 });
  }

  return new Response(JSON.stringify({ message: "Project does not exist" }), {
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
