
function Statistics() {
    const stats = [
        { number: '123+', title: 'Lorem ipsum', description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat' },
        { number: '12+', title: 'Lorem ipsum', description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et' },
        { number: '12+', title: 'Lorem ipsum', description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et' },
        { number: '123', title: 'Lorem ipsum', description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat' },
    ];

    return (
        <section className="statistics">
            {stats.map((stat, index) => (
                <div key={index} className="stat-item">
                    <h2>{stat.number}</h2>
                    <h3>{stat.title}</h3>
                    <p>{stat.description}</p>
                </div>
            ))}
        </section>
    );
}

export default Statistics;