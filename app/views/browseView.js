//? SEMANTIC - should these be buttons or anchor tags?
//https://ux.iu.edu/writings/buttons-vs-links-basic/
//https://uxmovement.com/buttons/when-to-use-a-button-or-link/

const renderQuote = (quote) => `
    <div class="card-holder">  
      <figure class="card">
        <div class="image-holder">
          <img src="./images/quotes/quote${quote.id}.jpg" alt="${quote.author}" />
          <button class="btn btn--xsmall btn--round btn-overlay" id="viewButton">View</button>
          <div class="button-holder">
            <button class="btn btn--xsmall btn--round" id="editButton">Edit</button>
            <button class="btn btn--xsmall btn--round" id="deleteButton">Delete</button>        
          </div>
        </div>
        <figcaption class="card-body">
          <h1 class="card-title">${quote.author}</h1>
          <p class="card-text">
            ${quote.text}
          </p>
        </figcaption>
      </figure>

    </div>
`;

const renderQuotes = (quotes) => `
  ${quotes.map((quote) => renderQuote(quote)).join("")}
`;

export const browseView = (quotes) => `

        <section class="gallery content">
          <h1 class="section-title">Seedlings</h1>
          <div class="cards">
            ${renderQuotes(quotes)}
          </div>
        </section>

`;
