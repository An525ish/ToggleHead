
function Subscribe() {
    return (
        <section className="subscribe">
            <div className="subscribe-content">
                <h2>Subscribe</h2>
                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna</p>
                <form>
                    <input type="email" placeholder="Enter your Email Address" />
                    <button type="submit">Subscribe Now ▶</button>
                </form>
            </div>
            <div className="subscribe-image">
                <img src="/subscribe.svg" alt="" />
            </div>
        </section>
    );
}

export default Subscribe;