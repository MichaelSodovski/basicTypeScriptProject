switch (shapeTypeSelection()) {
    case 1:
        switch (shapeContentSelecton()) {
            case 1:
                squareShapeStar(squareCheck());
                break;
            case 2:
                squareShapeHollow(squareCheck());
                break;
            case 3:
                squareShapeNumUp(squareCheck());
                break;
            case 4: squareShapeNumDown(squareCheck());
        }
        break;
    case 2:
        var rectangleWidth = 0, rectangleHeight = 0;
        alert(rectangleHeight = +prompt("Please enter Rectangle Height: "));
        alert(rectangleWidth = +prompt("Please enter Rectangle width: "));
        if (rectangleWidth <= 0 || rectangleHeight <= 0 || isNaN(rectangleWidth) || isNaN(rectangleHeight)) {
            alert("Error: Please enter a *positive* *integer* number");
            break;
        }
        switch (shapeContentSelecton()) {
            case 1:
                rectangleShapestar(rectangleHeight, rectangleWidth);
                break;
            case 2:
                rectangleShapeHollow(rectangleHeight, rectangleWidth); // בעייתי
                break;
            case 3:
                rectangleShapeNumUp(rectangleHeight, rectangleWidth);
                break;
            case 4: rectangleShapeNumDown(rectangleHeight, rectangleWidth);
        }
        break;
    case 3:
        switch (shapeContentSelecton()) {
            case 1:
                triangleShapestar(triangleCheck());
                break;
            case 2:
                triangleShapeHollow(triangleCheck());
                break;
            case 3:
                triangleShapeNumUp(triangleCheck());
                break;
            case 4: triangleShapeNumDown(triangleCheck());
        }
        break;
    default:
        alert("Error: Please select 1 or 2 or 3, for the shape type.");
        break;
}
//# sourceMappingURL=main.js.map