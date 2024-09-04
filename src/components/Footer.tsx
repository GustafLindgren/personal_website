function Footer() {

    const date = new Date();
    const currentYear = date.getFullYear();

    return(
        <footer>
            <p>
                &copy; {currentYear} gustaf-lindgren.se
            </p>
        </footer>
    )
}

export default Footer