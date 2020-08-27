import Breadcrumb from 'components/atoms/breadcrumb';
import Link from 'next/link';

export default function StaticFileServing() {
  return (
    <>
      <div className="container">
        <main>
          <Breadcrumb />
          <section>
            <h2>Otras cosas a tener en cuenta</h2>
            <ul>
              <li><Link href="/staticfileserving/"><a>Static File Serving</a></Link></li>
              <li>Built-In CSS Support</li>
              <li>Fast refresh (react)</li>
              <li>Polyfills</li>
              <li>Routing</li>
              <li><Link href="/apiroutes/"><a>API Routes</a></Link></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </section>
        </main>
      </div>
    </>
  );
}
