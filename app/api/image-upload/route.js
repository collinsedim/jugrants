// import formidable from "formidable";
import path from "path";
import fs from "fs/promises";

export const POST = async (req) => {
  const imageData = await req.formData();
  const imageFile = imageData.get("myImage");

  try {
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

    // console.log(JSON.stringify(imgURL));
    return new Response(
      JSON.stringify({ message: "Image upload success", fileLink: imgURL }),
      {
        status: 200,
      }
    );
  } catch (error) {
    console.log("Failed to upload file.", error);
    return new Response(
      JSON.stringify({ message: "File could not be uploaded, retry" }),
      { status: 500 }
    );
  }
};
