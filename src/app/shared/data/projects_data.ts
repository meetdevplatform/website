import { Injectable } from "@angular/core";
import { IProject } from "./interfaces";

@Injectable({
    providedIn: "root",
})

export class DummyProjects {

    projectsArr:IProject[] = [
        {
            title:'PaperLouge - read books online',
            thumbnail_image:'https://images.pexels.com/photos/1329571/pexels-photo-1329571.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
            tag_line:'Download PDF of vast number of books for free using PaperLouge and read them anywhere.',
            story:`Color theory is the art and science of creating harmonious color combinations. But every color has its own meaning and emotions attached to it. In this article, we’ll dive into the psychology and meaning of color.
            Knowing what color combinations to use in design is an art. Should you stick to a monochromatic color palette? Or maybe 2–3 complementary colors paired with an accent color? There are so many ways to use color to communicate, to make your design stand out, and to convey a certain mood and emotion.`,
            category:'Web Development',
            owner:'Mohit Patel',
            owner_img:'https://images.pexels.com/photos/2513993/pexels-photo-2513993.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=200&w=200',
            likes:[],
            comments:[],
            video:[],
            tags:["Frontend Development", "Backend Development", "Web Development", "Reading"],
            like_count:45,
            views:1500,
        },
        {
            title:'Stock Price Prediction',
            thumbnail_image:'https://images.pexels.com/photos/159888/pexels-photo-159888.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
            tag_line:'Predict stocks with 99.5% accuracy using advanced machine learning models.',
            story:`Color theory is the art and science of creating harmonious color combinations. But every color has its own meaning and emotions attached to it. In this article, we’ll dive into the psychology and meaning of color.
            Knowing what color combinations to use in design is an art. Should you stick to a monochromatic color palette? Or maybe 2–3 complementary colors paired with an accent color? There are so many ways to use color to communicate, to make your design stand out, and to convey a certain mood and emotion.`,
            category:'Machine Learning',
            owner:'Mukul Malviya',
            owner_img:'https://images.pexels.com/photos/1329494/pexels-photo-1329494.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=150&w=150',
            likes:[],
            comments:[],
            video:[],
            tags:["Machine Learning", "Fintech", "Linear Aggressions","Mobile Application"],
            like_count:99,
            views:2600,
        },
        {
            title:'Harmony - listen to the best.',
            thumbnail_image:'https://images.pexels.com/photos/761963/pexels-photo-761963.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
            tag_line:'A concept of landing page of an music app to be released in future.using CSS & HTML.',
            story:`Color theory is the art and science of creating harmonious color combinations. But every color has its own meaning and emotions attached to it. In this article, we’ll dive into the psychology and meaning of color.
            Knowing what color combinations to use in design is an art. Should you stick to a monochromatic color palette? Or maybe 2–3 complementary colors paired with an accent color? There are so many ways to use color to communicate, to make your design stand out, and to convey a certain mood and emotion.`,
            category:'Frontend Development',
            owner:'Mohit Patel',
            owner_img:'https://images.pexels.com/photos/2513993/pexels-photo-2513993.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=200&w=200',
            likes:[],
            comments:[],
            video:[],
            tags:["Frontend Development", "Web Design", "Web Development", "Music App", "HTML", "CSS"],
            like_count:45,
            views:2500,
        },
        {
            title:'Fitness Tracking App',
            thumbnail_image:'https://images.pexels.com/photos/159888/pexels-photo-159888.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
            tag_line:'Predict stocks with 99.5% accuracy using advanced machine learning models This model used linear agression with improvements.',
            story:`Color theory is the art and science of creating harmonious color combinations. But every color has its own meaning and emotions attached to it. In this article, we’ll dive into the psychology and meaning of color.
            Knowing what color combinations to use in design is an art. Should you stick to a monochromatic color palette? Or maybe 2–3 complementary colors paired with an accent color? There are so many ways to use color to communicate, to make your design stand out, and to convey a certain mood and emotion.`,
            category:'Machine Learning',
            owner:'Mahim Panchal',
            owner_img:'https://images.pexels.com/photos/4048497/pexels-photo-4048497.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=150&w=150',
            likes:[],
            comments:[],
            video:[],
            tags:["Machine Learning", "Flutter", "Android","Mobile Application"],
            like_count:99,
            views:4500,
        }
    ]

}
