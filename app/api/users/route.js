import path from "path";
import fs from "fs/promises";

import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

// import { prisma } from "../../../lib/prisma";

export const GET = async () => {
  try {
    const grantee = await prisma.grantee.findMany({
      include: {
        projects: true,
      },
    });

    if (grantee.length !== 0) {
      return new Response(JSON.stringify(grantee), { status: 200 });
    }

    return new Response(JSON.stringify({ error: "No Grantee found" }), {
      status: 404,
    });
  } catch (error) {
    return new Response(
      JSON.stringify({ error: "Something went wrong, retry!" }, error),
      {
        status: 400,
      }
    );
  }
};

// Create new Grantee
export const POST = async (req) => {
  const granteePostData = await req.formData();

  const imageFile = granteePostData.get("myImage");
  const name = granteePostData.get("name");
  const email = granteePostData.get("email");
  const phone = granteePostData.get("phone");
  const about = granteePostData.get("about");
  const website = granteePostData.get("website");
  const linkedin = granteePostData.get("linkedin");
  const github = granteePostData.get("github");
  const twitter = granteePostData.get("twitter");
  // console.log(name, email);

  // receive image file and save to grantee-uploads folder

  const buffer = await imageFile.arrayBuffer();
  const data = new Uint8Array(buffer);

  // console.log("Hello there", data);

  // replace all blank spaces with underscore to prettify the URL on the frontend
  const imageName = imageFile.name.replaceAll(" ", "_");

  // define the complete path to the image file, and prefix upload time/date to the filename
  const filePath = path.join(
    process.cwd(),
    "public",
    "grantee-uploads",
    Date.now() + "_" + imageName
  );

  // move file to /public directory
  await fs.writeFile(filePath, data);

  // format the image url so it can be used as src in html image element
  const imgURL = filePath.replace(process.cwd(), "").replaceAll("\\", "/");

  // end receive image file and save to grantee-uploads folder

  const granteeData = {
    name,
    email,
    phone,
    about,
    twitter,
    github,
    website,
    linkedin,
    photo: imgURL,
  };

  const checkGranteeExist = await prisma.grantee.findFirst({
    where: { name: name },
  });

  if (checkGranteeExist)
    return new Response(
      JSON.stringify({ message: "Grantee already exists." }),
      { status: 400 }
    );

  try {
    if (!checkGranteeExist) {
      const newGrantee = await prisma.grantee.create({
        data: granteeData,
      });

      return new Response(JSON.stringify(newGrantee.id), {
        status: 201,
      });
    }

    return new Response(JSON.stringify({ error: "Something went wrong!" }), {
      status: 400,
    });
  } catch (error) {
    // console.log("an error occured", error);
    return new Response(
      JSON.stringify({
        failed: "Could not create account, please retry or contact support.",
      }),
      {
        status: 500,
      }
    );
  }
};
