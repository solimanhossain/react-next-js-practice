export default function FooterList({ title }) {
    return (
        <div>
            <h1 className="text-lg md:pb-6">{title}</h1>
            <ul role="list" className="space-y-2 text-xs">
                <li>
                    <a href="#">About Us</a>
                </li>
                <li>
                    <a href="#">Contact Us</a>
                </li>
                <li>
                    <a href="#">Help</a>
                </li>
                <li>
                    <a href="#">FAQ</a>
                </li>
            </ul>
        </div>
    );
}
