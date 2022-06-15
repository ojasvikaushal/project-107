function startClassification()
{
    navigator.mediaDevices.getUserMedia({audio : true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/9GKR9iQ7e/model.json', modelReady);
}
function modelReady()
{
    classifier.classify(gotResult);
}
function gotResult(error, result)
{
    if(error)
    {
        console.log(error);
    }
    else
    {
        console.log(result);
    }
}