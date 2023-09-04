import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const POST = async (req) => {
  const { email, statusIdentity } = await req.json();

  console.log(email);

  try {
    const grantee = await prisma.grantee.findFirst({
      where: {
        email: email,
      },
    });

    if (grantee) {
      return new Response(JSON.stringify(grantee), { status: 200 });
    }

    return new Response(JSON.stringify({ error: "No Grantee found" }), {
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
