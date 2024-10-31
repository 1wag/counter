<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title></title>
    <style>
        body{
            background-color: aliceblue;
        }
        h1{
            font-weight: bold;
            font-size: 3em;
            text-align: center;
        }
        .aligned{
            text-align: center;
        }
        .button1{
            background-color: lightskyblue;
            color: black;
            font-weight: bold;
            padding: 15px;
            border-radius: 10px;
            border: none;
            cursor: pointer;
            transition: 0.25s
        }
        .button1:hover{
            color: white;
            background-color: blue;
        }
        #submit{
            cursor: pointer;
        }
    </style>
</head>
<body>
    <h1 id="counter">0</h1>
    <div class="aligned">
        <button class="button1" id="increase">Increment</button>
        <button class="button1" id="reset">Reset</button>
        <button class="button1" id="decrease">Decrement</button>
        <br><br>
        <label>Update by: </label>
        <input id="update_by" type="text" placeholder="number">
        <button id="submit">submit</button>
    </div>
    <script src="index.js"></script>
</body>
</html>
