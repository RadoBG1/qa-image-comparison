# QA Image Comparison

QA Image Comparison is a library for comparing images, designed for quality assurance purposes. It leverages the Jimp library to provide utilities for comparing images provided as base64 strings, from file paths, or directly using Jimp objects.

## Installation

You can install the library via npm:

```bash
npm install qa-image-comparison
Usage
Initialization
typescript
Copy code
import { CompareImages } from 'qa-image-comparison';

const comparer = new CompareImages();
Comparing Images from Base64 Strings
typescript
Copy code
const image1Base64 = '...'; // Base64 string of the first image
const image2Base64 = '...'; // Base64 string of the second image

const result = await comparer.CompareImagesByBase64String(image1Base64, image2Base64);
console.log('Images match:', result);
Comparing Images from Disk
typescript
Copy code
const imagePath1 = 'path/to/image1.jpg';
const imagePath2 = 'path/to/image2.jpg';

const result = await comparer.CompareImagesFromDisk(imagePath1, imagePath2);
console.log('Images match:', result);
Comparing Jimp Images Directly
typescript
Copy code
import Jimp from 'jimp';

const image1 = await Jimp.read('path/to/image1.jpg');
const image2 = await Jimp.read('path/to/image2.jpg');

const result = await comparer.CompareJimpImages(image1, image2);
console.log('Images match:', result);
API Reference
CompareImages Class
CompareImagesByBase64String(imageExpectedString: string, imageActualString: string): Promise<boolean>
Compares two images provided as base64 strings.

imageExpectedString: Base64 string of the expected image.
imageActualString: Base64 string of the actual image to be compared.
Returns a Promise resolving to true if images match, false otherwise.

CompareImagesFromDisk(imageExpectedPath: string, imageActualPath: string): Promise<boolean>
Compares images from file paths.

imageExpectedPath: Path to the expected image file.
imageActualPath: Path to the actual image file to be compared.
Returns a Promise resolving to true if images match, false otherwise.

CompareJimpImages(imageExpected: Jimp, imageActual: Jimp): Promise<boolean>
Compares two Jimp images directly.

imageExpected: The expected Jimp image.
imageActual: The actual Jimp image to be compared.
Returns true if images match, false otherwise.

License
This library is licensed under the MIT License.

Version
Current version: 1.0.0

Author
[Your Name Here]