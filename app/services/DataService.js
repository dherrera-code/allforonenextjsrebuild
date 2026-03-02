
//This file will have ALL endpoints from my All for one API!

const APIURL = "https://allforoneapidh-h2cygwchdcbbcsce.westus3-01.azurewebsites.net";

export const GetSum = async (num1, num2) => {
    const response = await fetch(APIURL + `/api/addingtwonumber/${num1}/${num2}`);
    const data = await response.text();
    return data;
}

export const GetAskingQuestions = async (name, time) => {
    const response = await fetch(APIURL + `/api/AskingQuestions/enternameandtime/${name}/${time}`);
    const data = await response.text();
    return data;
}