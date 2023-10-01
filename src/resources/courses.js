
import kaggle_intro from  './Jadesola Bejide - Intro to Machine Learning.png';
function setCourse(id) {
    return `https://www.bris.ac.uk/unit-programme-catalogue/UnitDetails.jsa;jsessionid=135B6100B87029B8719839EC3AFC9896?ayrCode=23%2F24&unitCode=${id}`;
}

export const courses = [
    {
        title: "Kaggle - Introduction to Machine Learning",
        link: kaggle_intro,
        status: "Completed",
        descr: "An introduction to machine learning and sci-kit learn."
    },
    {
        title: "Accelerated Introduction to Natural Language Processing",
        link: "https://github.com/aws-samples/aws-machine-learning-university-accelerated-nlp",
        status: "Completed",
        descr: "Covered introductory NLP concepts; built a sentiment analysis model for product reviews. **The provided link is not entirely reflective of the course content I studied.**"
    },
]