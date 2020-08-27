import Link from 'next/link';

const Breadcrumb = () => (
  <>
    <div>
      <Link href="/">
        <a>
          <svg viewBox="0 0 20 20" fill="currentColor" class="chevron-left w-6 h-6"><path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
        </a>
      </Link>
    </div>
    <style jsx>{`
      div {
        align-items: center;
        display: flex;
        justify-items: flex-start;
        left: 10rem;
        margin: 1rem 0;
        position: fixed;
        top: 1rem;
      }

      svg {
        width: 2rem;
      }
    `}</style>
  </>
);

export default Breadcrumb;
