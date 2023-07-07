import {surpriseMePrompts} from '../Constants';

// this is made for accepting prompt as a parameter 
export function getRandomPrompt(prompt) {
    // made this for getting random index from surprise me element/prompt
    const randomIndex = Math.floor(Math.random() * surpriseMePrompts.length);
    const randomPrompt = surpriseMePrompts[randomIndex];
    // this is written for not getting same same random prompt or to avoid repetition
    if(randomPrompt === prompt ) return getRandomPrompt(prompt);

    return randomPrompt;
}