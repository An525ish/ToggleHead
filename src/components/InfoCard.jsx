
function InfoCards() {
    const cards = [
        { title: 'Lorem ipsum', content: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod' },
        { title: 'Lorem ipsum', content: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod' },
        { title: 'Lorem ipsum', content: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod' },
        { title: 'Lorem ipsum', content: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod' },
        { title: 'Lorem ipsum', content: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod' },
    ];

    return (
        <section className="info-cards">
            {cards.map((card, index) => (
                <div key={index} className="card">
                    <h3>{card.title}</h3>
                    <p className="card-content">{card.content}</p>
                    <button className="card-btn">Know More <span className="card-btn-tri">❯</span></button>
                </div>
            ))}
        </section>
    );
}

export default InfoCards;