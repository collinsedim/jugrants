import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const GET = async () => {
  try {
    const grantee = await prisma.grantee.findMany();

    if (grantee.length === 0) {
      return new Response(JSON.stringify({ message: "No Grantee found" }), {
        status: 404,
      });
    }

    return new Response(JSON.stringify(grantee), { status: 200 });
  } catch (error) {
    return new Response(
      JSON.stringify(
        { message: "Something went wrong brother, retry!" },
        error
      ),
      {
        status: 400,
      }
    );
  }
};

export const POST = async (data) => {
  const grantee = await prisma.grantee.create(data);
  return new Response(JSON.stringify(grantee), { status: 200 });
};
