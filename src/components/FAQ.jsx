import { useState } from 'react';

function FAQ() {
    const [openQuestion, setOpenQuestion] = useState(null);

    const questions = [
        { question: 'How does an investor gain access to MF Utility?', answer: 'Lorem ipsum dolor sit amet, nsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.' },
        { question: 'Will investors be able to have multiple Common Account Numbers?', answer: 'Lorem ipsum dolor sit amet, nsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.' },
        { question: 'How does an investor gain access to MF Utility?', answer: 'Lorem ipsum dolor sit amet, nsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.' },
    ];

    const toggleQuestion = (index) => {
        setOpenQuestion(openQuestion === index ? null : index);
    };

    return (
        <section className="faq">
            <h2>FAQ</h2>
            {questions.map((q, index) => (
                <div key={index} className="faq-item">
                    <p className={`${openQuestion === index ? 'active' : ''}`} onClick={() => toggleQuestion(index)}>
                        {q.question}
                        <span className='toggle'>{openQuestion === index ? '-' : '+'}</span>
                    </p>
                    {openQuestion === index && <p>{q.answer}</p>}
                </div>
            ))}
        </section>
    );
}

export default FAQ;