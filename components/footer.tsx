import Container from './container'
import { EXAMPLE_PATH } from '../lib/constants'

const Footer = () => {
  return (
    <footer className="bg-neutral-50 border-t border-neutral-200">
      <Container>
        <div className="py-10 flex flex-col lg:flex-row items-center">
          <div className="flex flex-col lg:flex-row justify-center items-center lg:pl-4 lg:w-1/2">
            <a
              href={`https://www.linkedin.com/in/adrianzailic/`}
              className="mx-3 font-bold hover:underline"
            >
              LinkedIn
            </a>
            <a
              href={`https://www.instagram.com/adrianzailic/`}
              className="mx-3 font-bold hover:underline"
            >
              Instagram
            </a>
          </div>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
