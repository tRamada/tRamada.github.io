import { personal } from '../data/personal';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <p className="footer__text">
          &copy; {new Date().getFullYear()} {personal.name}. Built with React.
        </p>
      </div>
    </footer>
  );
}
