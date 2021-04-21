import React from 'react';

import { Meta } from '../layout/Meta';
import { Main } from '../templates/Main';

const Index = () => (
  <Main
    meta={(
      <Meta
        title="Buddy and GitKraken demo"
        description="With GitKraken to manage code versioning and Buddy simplifying CI/CD there is nothing we can't do"
      />
    )}
  >
    <h1 className="font-bold text-2xl">Buddy and GitKraken demo</h1>
    <p>
      <img alt="Buddy-logo" src="https://blog.knoldus.com/wp-content/uploads/2019/09/buddy.png" />
      <img
        alt="GitKraken-logo"
        src="https://www.gitkraken.com/downloads/brand-assets/gitkraken-logo-dark-hz.png"
      />
      <span role="img" aria-label="rocket">
        🚀
      </span>
      {' '}
      This is made from the Next.js Boilerplate, a starter code for Next js projects.
    </p>
    <p>
      <br />
      Check the GitHub project for more information about
      {' '}
      <a href="https://github.com/ixartz/Next-js-Boilerplate">Nextjs Boilerplate</a>
      .
    </p>
  </Main>
);

export default Index;
