// Function to get next and previous URLs based on current URL
function getNextAndPrevious(currentUrl) {
    const jsonData = [
        {
            "projectName": "Reimagining the Diabetic Patient Experience",
            "url": "/ideo",
            "compony": "ideo"
        },
        {
            "projectName": "Public Health design Research",
            "url": "/ideo2",
            "compony": "ideo"
        },
        {
            "projectName": "The Student Writting Experience",
            "url": "/ideo3",
            "compony": "ideo"
        },
        {
            "projectName": "Search Q&A Feature definition + UX Design",
            "url": "/searchqna",
            "compony": "byjus"
        },
        {
            "projectName": "Distractors Feature definition + UX Design",
            "url": "/byjus2",
            "compony": "byjus"
        },
        {
            "projectName": "Market Study + Product Strategy",
            "url": "/da_strategy",
            "compony": "byjus"
    
        },
        {
            "projectName": "Product UX Design + Management",
            "url": "/DAPS2",
            "compony": "byjus"
    
        },
        {
            "projectName": "Co-designing the Future of Volunteering in Australia",
            "url": "/thinkplace",
            "compony": "thinkplace"
    
        },
        {
            "projectName": "Repositioning Vice as the pioneer of Social 'Impact' Media",
            "url": "/VICE",
            "compony": "VICE"
    
        }
    
    ];
    
    
    let currentIndex = -1;

    // Find the index of the current URL in the JSON data
    for (let i = 0; i < jsonData.length; i++) {
        if (jsonData[i].url === currentUrl) {
            currentIndex = i;
            break;
        }
    }

    let nextData = null;
    let prevData = null;

    // Determine next and previous URLs
    if (currentIndex !== -1) {
        if (currentIndex < jsonData.length - 1) {
            nextData = jsonData[currentIndex + 1];
        }
        if (currentIndex > 0) {
            prevData = jsonData[currentIndex - 1];
        }
    }

    return { nextData, prevData };
}



module.exports = getNextAndPrevious;

 