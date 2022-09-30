const { Post } = require('../models');

const postdata =
    [
        {
            "title": "Having a hard day",
            "content": "Today my boss had a talk with me about my supposed attitude. He said that I don't smile enough! First of all... WTH you can't say that! Second, I just wish people would understand how difficult it is sometimes. I even tried to explain it simply but he sort of just brushed me off. Feeling really down about me right now.",
            "userId": 1
        },
        {
            "title": "i need help...",
            "content": "i'm really sad right now... My mom still doesn't believe mental illness is real... She says it's just an excuse to be lazy... i really want to see a therapist but i'm scared to ask her i was hoping someone could give me a little lift and help me figure out what i can do...",
            "userId": 2
        },
        {
            "title": "I had a really great day",
            "content": "I just wanted to come and tell everyone that today I had a great day. I was able to stay positive for most of the day and not feel the weight crusing down on my shoulders! I'm so happy to have all of you to share with!",
            "userId": 3
        }
    ];

const seedPost = () => Post.bulkCreate(postdata);

module.exports = seedPost;