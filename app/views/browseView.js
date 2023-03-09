const renderQuote = (quote) => `
    <div class="card-holder">  
      <figure class="card">
        <div class="image-holder">
          <img src="./images/quotes/quote${quote.id}.jpg" alt="${quote.author}" />
          <button class="btn btn--xsmall btn--round btn-overlay">View</button>
        </div>
        <figcaption class="card-body">
          <h1 class="card-title">${quote.author}</h1>
          ${quote.text}          
        </figcaption>
      </figure>
      <div class="button-holder">
        <button class="btn btn--xsmall btn--round">Edit</button>
        <button class="btn btn--xsmall btn--round">Delete</button>        
      </div>
    </div>
`;

const renderQuotes = (quotes) => `
  ${quotes.map((quote) => renderQuote(quote)).join("")}
`;

export const browseView = (quotes) => `

        <section class="gallery">
          <h1 class="section-title">Seedlings</h1>
          <div class="cards">
            ${renderQuotes(quotes)}
          </div>
        </section>

`;
