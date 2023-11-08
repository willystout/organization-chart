export default {
    async fetch(request) {
      const orgdata = {
          "organization":  { 
            "departments": [{
                name: "",
                managerName: "",
                employees: [{
                  name: "",
                  department: "",
                  salary: 0,
                  office: "",
                  isManager: false,
                  skills: []
                }]
            }]
          }
    };
      const json = JSON.stringify(orgdata, null, 2);
      return new Response(json, {
        headers: {
          "content-type": "/organization-chart",
        },
      });
    },
  };