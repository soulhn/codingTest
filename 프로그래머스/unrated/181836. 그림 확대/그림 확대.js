function solution(picture, k) {
    const height = picture.length; 
    const width = picture[0].length; 
    

    const enlargedPicture = [];
    

    for (let i = 0; i < height; i++) {
        const row = picture[i];
        let newRow = '';
        for (let j = 0; j < width; j++) {
            const pixel = row[j];
            newRow += pixel.repeat(k);
        }
        for (let l = 0; l < k; l++) {
            enlargedPicture.push(newRow);
        }
    }
    
    return enlargedPicture;
}
