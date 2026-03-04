//This file will have ALL endpoints from my All for one API!
const APIURL = "https://allforoneapidh-h2cygwchdcbbcsce.westus3-01.azurewebsites.net";

const GetSum = async (num1, num2) => {
    const response = await fetch(APIURL + `/api/addingtwonumber/${num1}/${num2}`);
    const data = await response.text();
    return data;
}

const GetAskingQuestions = async (name, time) => {
    const response = await fetch(APIURL + `/api/AskingQuestions/enternameandtime/${name}/${time}`);
    const data = await response.text();
    return data;
}

const GetGreaterOrLess = async (num1, num2) => {
    const response = await fetch(APIURL + `/${num1}/${num2}`);
    const data = await response.text();
    return data
}

const GetHelloName = async (name) => {
    const response = await fetch(APIURL + `/api/helloworld/hello/${name}`);
    const data = await response.text();
    return data;
}
const GetMadLib = async (name, location, adjective, creature, mood) => {
    const response = await fetch(APIURL + `/api/MadLibShort/${name}/${location}/${adjective}/${creature}/${mood}`);
    const data = await response.text();
    return data;
}

const GetMagic8Ball = async (question) => {
    const response = await fetch(APIURL + `/askAQuestion/${question}`)
    const data = await response.text();
    return data;
}

const GetOddOrEven = async (number) => {
    const response = await fetch(APIURL + `/api/OddOrEven/${number}`);
    const data = response.text();
    return data;
}

const GetRestaurant = async (choice) => {
    const response = await fetch(APIURL + `/burgerPizzaMisc/${choice}`);
    const data = await response.text();
    return data;
}
const GetReverseAlpha = async (string) => {
    const response = await fetch(APIURL + `/api/reverseitalpha/${string}`);
    const data = await response.text();
    return data;
}

const GetReverseNum = async (number) => {
    const response = await fetch(APIURL + `/numbersOnly/${number}`);
    const data = await response.text();
    return data;
}

export {GetHelloName, GetSum, GetAskingQuestions, GetGreaterOrLess, GetMadLib, GetMagic8Ball, GetOddOrEven, GetRestaurant, GetReverseAlpha, GetReverseNum}