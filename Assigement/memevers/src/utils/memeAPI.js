export const generateAIMeme = async (topText, bottomText) => {
    try {
        const formattedTopText = encodeURIComponent(topText);
        const formattedBottomText = encodeURIComponent(bottomText);
        const memeUrl = `https://api.memegen.link/images/buzz/${formattedTopText}/${formattedBottomText}.png`;

        return memeUrl;
    } catch (error) {
        console.error("Error generating AI meme:", error);
        return null;
    }
};

export const uploadMemeImage = async (imageFile) => {
    try {
        if (!imageFile) {
            console.error("No image file provided for upload.");
            return null;
        }

        const formData = new FormData();
        formData.append("image", imageFile);

        const response = await fetch(`https://api.imgbb.com/1/upload?key=052cd4a87fadf194968d83c9bd8ee15b`, {
            method: "POST",
            body: formData,
        });

        const data = await response.json();

        if (!response.ok) {
            console.error("Upload failed:", data);
            return null;
        }

        return data.data.url;
    } catch (error) {
        console.error("Error uploading meme:", error);
        return null;
    }
};
