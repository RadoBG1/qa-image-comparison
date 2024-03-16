import Jimp from "jimp";

// Class for comparing images using the Jimp library
export class CompareImages {
    jimp: Jimp;

    /**
     * Initializes the CompareImages class with Jimp.
     */
    constructor() {
        this.jimp = new Jimp(); // Initialize Jimp
    }

    /**
     * Compare two images provided as base64 strings.
     * @param imageExpectedString Base64 string of the expected image.
     * @param imageActualString Base64 string of the actual image to be compared.
     * @returns A Promise resolving to true if images match, false otherwise.
     */
    public async CompareImagesByBase64String(imageExpectedString: string, imageActualString: string): Promise<boolean> {
        let result: boolean;

        // Convert base64 strings to buffers
        let bufferExpected = Buffer.from(imageExpectedString, "base64");
        let imageExpected: Jimp = await Jimp.read(bufferExpected);
        let bufferActual = Buffer.from(imageActualString, "base64");
        let imageActual: Jimp = await Jimp.read(bufferActual);

        // Calculate image distance and difference
        const distance = Jimp.distance(imageExpected, imageActual);
        const diff = Jimp.diff(imageExpected, imageActual);

        // Output comparison results
        console.log(`compareImages: distance: ${distance.toFixed(3)}, diff.percent: ${diff.percent.toFixed(3)}`);
        if (distance < 0.15 || diff.percent < 0.15) {
            console.log("compareImages: Images match!");
            result = true;
        } else {
            console.log("compareImages: Images do NOT match!");
            return false;
        }

        return result;
    }

    /**
     * Compare images from file paths.
     * @param imageExpectedPath Path to the expected image file.
     * @param imageActualPath Path to the actual image file to be compared.
     * @returns A Promise resolving to true if images match, false otherwise.
     */
    public async CompareImagesFromDisk(imageExpectedPath: string, imageActualPath: string): Promise<boolean> {
        let result: boolean;

        // Read images from disk
        const imageExpected = await Jimp.read(imageExpectedPath);
        const imageActual = await Jimp.read(imageActualPath);

        // Calculate image distance and difference
        const distance = Jimp.distance(imageExpected, imageActual);
        const diff = Jimp.diff(imageExpected, imageActual);

        // Output comparison results
        console.log(`compareImages: distance: ${distance.toFixed(3)}, diff.percent: ${diff.percent.toFixed(3)}`);
        if (distance < 0.15 || diff.percent < 0.15) {
            console.log("compareImages: Images match!");
            result = true;
        } else {
            console.log("compareImages: Images do NOT match!");
            result = false;
        }

        return result;
    }

    /**
     * Compare two Jimp images directly.
     * @param imageExpected The expected Jimp image.
     * @param imageActual The actual Jimp image to be compared.
     * @returns True if images match, false otherwise.
     */
    public async CompareJimpImages(imageExpected: Jimp, imageActual: Jimp) {
        let result: boolean;

        // Calculate image distance and difference
        const distance = Jimp.distance(imageExpected, imageActual);
        const diff = Jimp.diff(imageExpected, imageActual);

        // Output comparison results
        console.log(`compareImages: distance: ${distance.toFixed(3)}, diff.percent: ${diff.percent.toFixed(3)}`);
        if (distance < 0.15 || diff.percent < 0.15) {
            console.log("compareImages: Images match!");
            result = true;
        } else {
            console.log("compareImages: Images do NOT match!");
            result = false;
        }

        return result;
    }
}
