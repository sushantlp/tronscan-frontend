import React, {Component} from 'react';
import {connect} from "react-redux";

class News extends Component {

  componentDidMount() {

  }

  render() {


    return (
      <main className="container header-overlap news">

        <div className="row">
          <div className="col-md-12">
            <div className="card">
              <div className="card-body">
                <div className="media row">
                  <img className="mr-3 col-md-3"
                       src={require("../../images/frontpage/srnews/slide-2.jpg")}
                       style={styles.image}/>
                  <div className="media-body col-md-9">
                    <h5 className="mt-0">Super Representative Pages Launched!</h5>
                    <p>
                      Gaining information about Super Representatives has never been easier!
                      Super Representatives are now able to publish their information right here on Tronscan.
                    </p>
                    <p>
                      Using the power of Github a Super Representative can now manage their content and publish
                      it to Tronscan. Pages are made of simple Markdown files and can be pages can be provided
                      in different languages. Take a look at the pages of some of the early adopters:
                    </p>
                    <ul className="pt-2">
                      <li><a href="https://tronscan.org/#/representative/27d5JV5sJH2ERb7Kddcp5p2n2yR2zuKCAQs">Sky People</a></li>
                      <li><a href="https://tronscan.org/#/representative/27WK11uSBUjxmnbtQ3AArs1hLpUkPg4WAJF">CryptoChain Brazil</a></li>
                      <li><a href="https://tronscan.org/#/representative/27WDUwfv7FzWmNuj4rbrmRjxQvgHnC46Kcf">CryptoGuyInZA</a></li>
                    </ul>
                    <p>
                      If you are interested in publishing a page yourself then read the tutorial on the Github project {' '}
                      <a href="https://github.com/tronscan/tronsr-template#readme">Tronscan SR Template</a> to get started.
                      Or watch the excellent walkthrough that <a href="https://twitter.com/cryptoguyinza">CryptoGuyInZA</a> made
                    </p>
                    <p className="d-flex justify-content-center">
                      <iframe width="560"
                        height="315"
                        src="https://www.youtube.com/embed/hlDKjcBgFb8"
                        frameBorder="0"
                        allow="autoplay; encrypted-media"
                        allowFullScreen/>
                    </p>
                    <p>
                      Stay tuned for more features which will be released in the future to allow
                      Super Representatives to better inform their voters
                    </p>
                  </div>
                </div>
              </div>
              <div className="card-footer text-muted d-flex">
                <span>
                  Date: 18 May 2018
                </span>
                <span className="ml-auto">
                  Author: Rovak
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="row mt-3">
          <div className="col-md-12">
            <div className="card">
              <div className="card-body">
                <div className="media row">
                  <img className="mr-3 col-md-3"
                       src={require("../../images/news/item1.png")}
                       style={styles.image}/>
                  <div className="media-body col-md-9">
                    <h5 className="mt-0">Tronscan V2 Launched!</h5>
                    <p>
                      After weeks of behind-the-scenes development we finally released a new version of Tronscan!
                      This update contains exciting new features:
                    </p>
                    <ul className="pt-2">
                      <li>Full redesign! 2 themes to choose from</li>
                      <li>Blocks, transactions, accounts can be browsed and have detail pages</li>
                      <li>Search through the blockchain</li>
                      <li>Voting interface has been redesigned</li>
                      <li>The nodemap now contains the IP addresses of the nodes</li>
                      <li>Instant notifications when a transaction happens for open wallets</li>
                      <li>View TRX prices in ETH, BTC, USD, or EUR</li>
                      <li>Live view of all the transactions happening on the blockchain</li>
                    </ul>
                    <p>
                      There are still many more features in development which will be announced in the coming weeks.
                      The explorer will provide integrations with Mobile Tron Wallets, in a future update it will no
                      longer be required to use your private key in the browser!
                    </p>
                  </div>
                </div>
              </div>
              <div className="card-footer text-muted d-flex">
                <span>
                  Date: 15 May 2018
                </span>
                <span className="ml-auto">
                  Author: Rovak
                </span>
              </div>
            </div>
          </div>
        </div>
      </main>
    )
  }
}

const styles = {
  image: {
    maxWidth: 300,
    borderRadius: 5,
  }
};

function mapStateToProps(state) {
  return {
  };
}

const mapDispatchToProps = {
};

export default connect(mapStateToProps, mapDispatchToProps)(News)
