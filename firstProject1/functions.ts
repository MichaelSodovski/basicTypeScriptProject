function shapeTypeSelection(): number {
    let shapeType = 0;
    alert(shapeType = +prompt("welcome to the best shape simulator ever in the entire world!" + "\n"
        + "please select desired shape: " + "\n"
        + "1) Square" + "\n"
        + "2) Rectangle" + "\n"
        + "3) Triangle"));
    return shapeType;
}
function shapeContentSelecton(): number {
    let shapeContent = 0;
    alert(shapeContent = +prompt("Please select shape content: " + "\n"
        + "1) ******" + "\n"
        + "2) *      *" + "\n"
        + "3) 12345" + "\n"
        + "4) 54321" + "\n"))
    if (shapeContent > 4 || shapeContent == 0) {
        alert("Error: Please select 1 or 2 or 3 or 4, for the shape Content.");
    }
    return shapeContent;
}

function squareCheck(): number {
    let squareSize = 0;
    alert(squareSize = +prompt("Please enter the Square's side length: "));
    if (squareSize <= 0 || isNaN(squareSize)) {
        alert("Error: Please enter a *positive* *integer* number");
    }
    return squareSize;
}
function triangleCheck(): number {
    let triangleSideLength = 0;
    alert(triangleSideLength = +prompt("Please enter Triangle side length: "));
    if (triangleSideLength <= 0 || isNaN(triangleSideLength)) {
        alert("Error: Please enter a *positive* *integer* number");
    }
    return triangleSideLength;
}

function squareShapeStar(squareSize: number): void {
    for (let i = 1; i <= squareSize; i++) { 
        for (let j = 1; j <= squareSize; j++) {
            document.write("* ");
        }
        document.write("<br>");
    }
    document.write("Square Perimeter: " + (squareSize*4) + "<br>");
    document.write("Square area: " + (squareSize * squareSize) + "<br>");
}
function squareShapeHollow(squareSize: number): void {
    for (let i = 1; i <= squareSize; i++) {
        for (let j = 1; j <= squareSize; j++) {
            if (i == 1 || i == squareSize || j == 1 || j == squareSize) {
                document.write("*&nbsp; ");
            }
            else {
                document.write("&nbsp;&nbsp; ");
            }
        }
        document.write("<br>");
    }
    document.write("Square Perimeter: " + (squareSize * 4) + "<br>");
    document.write("Square area: " + (squareSize * squareSize) + "<br>");
}
function squareShapeNumUp(squareSize: number): void {
    for (let i = 1; i <= squareSize; i++) {
        for (let j = 1; j <= squareSize; j++) {
            document.write(j + " ");
        }
        document.write("<br>");
    }
    document.write("Square Perimeter: " + (squareSize * 4) + "<br>");
    document.write("Square area: " + (squareSize * squareSize) + "<br>");
}
function squareShapeNumDown(squareSize: number): void {
    for (let i = squareSize; i >= 1; i--) {
        for (let j = squareSize; j >= 1; j--) {
            document.write(j + " ");
        }
        document.write("<br>");
    }
    document.write("Square Perimeter: " + (squareSize * 4) + "<br>");
    document.write("Square area: " + (squareSize * squareSize) + "<br>");
}

function rectangleShapestar(rectangleHeight: number, rectangleWidth: number): void {
    for (let i = 1; i <= rectangleHeight; i++) {
        for (let j = 1; j <= rectangleWidth; j++) {
            document.write("* ");
        }
        document.write("<br>");
    }
    document.write("Rectangle Perimeter: " + ((rectangleHeight * 2) + (rectangleWidth*2)) + "<br>");
    document.write("Rectangle area: " + (rectangleHeight * rectangleWidth) + "<br>");
}
function rectangleShapeHollow(rectangleHeight: number, rectangleWidth: number): void {
    for (let i = 1; i <= rectangleHeight; i++) {
        for (let j = 1; j <= rectangleWidth; j++) {
            if (i == 1 || i == rectangleHeight || j == 1 || j == rectangleWidth) { 
                document.write("*&nbsp; "); 
            }
            else {
                document.write("&nbsp;&nbsp; "); 
            }
        }
        document.write("<br>"); 
    }
    document.write("Rectangle Perimeter: " + ((rectangleHeight * 2) + (rectangleWidth * 2)) + "<br>");
    document.write("Rectangle area: " + (rectangleHeight * rectangleWidth) + "<br>");
}
function rectangleShapeNumUp(rectangleHeight: number, rectangleWidth: number): void {
    for (let i = 1; i <= rectangleHeight; i++) {
        for (let j = 1; j <= rectangleWidth; j++) {
            document.write(j + " ");
        }
        document.write("<br>");
    }
    document.write("Rectangle Perimeter: " + ((rectangleHeight * 2) + (rectangleWidth * 2)) + "<br>");
    document.write("Rectangle area: " + (rectangleHeight * rectangleWidth) + "<br>");
}
function rectangleShapeNumDown(rectangleHeight: number, rectangleWidth: number): void {
    for (let i = rectangleHeight; i >= 1; i--) {
        for (let j = rectangleWidth; j >= 1; j--) {
            document.write(j + " ");
        }
        document.write("<br>");
    }
    document.write("Rectangle Perimeter: " + ((rectangleHeight * 2) + (rectangleWidth * 2)) + "<br>");
    document.write("Rectangle area: " + (rectangleHeight * rectangleWidth) + "<br>");
}

function triangleShapestar(triangleSideLength: number): void {
    for (let i = 1; i <= triangleSideLength; i++) {
        for (let j = 1; j <= i; j++) {
            document.write("* ");
        }
        document.write("<br>");
    }
    let a = (triangleSideLength * triangleSideLength);
    let b = (triangleSideLength * triangleSideLength);
    let sum = a + b;
    let c = Math.sqrt(sum);
    document.write("Triangle Perimeter: " + (c + triangleSideLength + triangleSideLength) + "<br>");
    document.write("Triangle area: " + ((triangleSideLength * triangleSideLength) / 2) + "<br>"); 
}
function triangleShapeHollow(triangleSideLength: number): void {
    for (let i = 1; i <= triangleSideLength; i++) {
        for (let j = 1; j <= i; j++) {
            if (i == 1 || i == triangleSideLength || j == 1 || j == i) {
                document.write("*&nbsp; ");
            }
            else {
                document.write("&nbsp;&nbsp; ");
            }
        }
        document.write("<br>");
    }
    let a = (triangleSideLength * triangleSideLength);
    let b = (triangleSideLength * triangleSideLength);
    let sum = a + b;
    let c = Math.sqrt(sum);
    document.write("Triangle Perimeter: " + (c + triangleSideLength + triangleSideLength) + "<br>");
    document.write("Triangle area: " + ((triangleSideLength * triangleSideLength) / 2) + "<br>"); 
}
function triangleShapeNumUp(triangleSideLength: number): void {
    for (let i = 1; i <= triangleSideLength; i++) {
        for (let j = 1; j <= i; j++) {
            document.write(j + " ");
        }
        document.write("<br>");
    }
    let a = (triangleSideLength * triangleSideLength);
    let b = (triangleSideLength * triangleSideLength);
    let sum = a + b;
    let c = Math.sqrt(sum);
    document.write("Triangle Perimeter: " + (c + triangleSideLength + triangleSideLength) + "<br>");
    document.write("Triangle area: " + ((triangleSideLength * triangleSideLength) / 2) + "<br>"); 
}
function triangleShapeNumDown(triangleSideLength: number): void {
    for (let i = triangleSideLength; i >= 1; i--) {
        for (let j = 1; j <= i; j++) {
            document.write(j + " "); 
        }
        document.write("<br>"); 
    }
    let a = (triangleSideLength * triangleSideLength);
    let b = (triangleSideLength * triangleSideLength);
    let sum = a + b;
    let c = Math.sqrt(sum);
    document.write("Triangle Perimeter: " + (c + triangleSideLength + triangleSideLength) + "<br>");
    document.write("Triangle area: " + ((triangleSideLength * triangleSideLength) / 2) + "<br>"); 
}

