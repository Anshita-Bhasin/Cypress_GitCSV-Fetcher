describe('Fetch data from different github repository', () => {


    it('Fetch csv from github repo', () => {
        cy.request({
            method: "GET",
            url: "https://api.github.com/repos/Anshita-Bhasin/Cypress_Examples/contents/csv/test.csv",
            headers: {
                Accept: "application/vnd.github+json",
                Authorization: "Bearer <Your_Token>",
            },
        }).then((sshresponse) => {
            cy.writeFile(
                "cypress/fixtures/csv/test-csv",
                atob(sshresponse.body.content),
                "utf8"
            );
        });



    });



})






