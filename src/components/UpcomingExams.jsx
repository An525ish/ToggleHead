
function UpcomingExams() {
    return (
        <section className="upcoming-exams">
            <div className="exam-info">
                <h2>Upcoming Examinations</h2>
                <p>Enquire about the examination & register for the exams</p>
            </div>
            <div className="exam-list">
                <div className="exam-item-container">
                    <img src="/calendar.svg" alt="" />
                    <div className="exam-item">
                        <span className="exam-date">02th October 2014</span>
                        <span className="exam-name">Level 1 exam</span>
                    </div>
                </div>
                <div className="exam-item-container">
                    <img src="/calendar.svg" alt="" />
                    <div className="exam-item">
                        <span className="exam-date">Nov-Dec 2016</span>
                        <span className="exam-name">Level 2</span>
                        <span className="exam-details">Lorem Ipsum</span>
                        <span className="exam-details">Lorem Ipsum</span>
                    </div>
                </div>
                <div className="exam-item-container">
                    <img src="/calendar.svg" alt="" />
                    <div className="exam-item">
                        <span className="exam-date">Ongoing this year</span>
                        <span className="exam-name">Level 3 (Grad)</span>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default UpcomingExams;