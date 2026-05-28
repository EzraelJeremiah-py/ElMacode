from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route("/api/portfolio", methods=["GET"])
def portfolio():
    data = {
        "name": "ELIHUDI TUMAINI",
        "title": "Data Science Student",
        "profile": "Well-trained student focused on data analytics and data insights for informed decision making.",
        "skills": [
            "R Programming",
            "Python",
            "HTML and CSS",
            "Database Management",
            "Data Visualization",
            "Statistical Analysis"
        ],
        "qualifications": [
            "Bachelor Degree Student at EASTC",
            "Introduction to ICT Devices",
            "Cloud Computing Knowledge"
        ],
        "projects": [
            {
                "title": "Machine Learning for Student Performance Prediction",
                "description": "Analyzed student performance datasets using Python libraries such as pandas and numpy. Results were visualized using matplotlib."
            },
            {
                "title": "Agricultural Data Analytics",
                "description": "Conducted MANOVA using R Studio."
            }
        ],
        "contact": {
            "email": "elihuditumaini@gmail.com",
            "phone": "+255 675031464",
            "location": "Kilimanjaro, Tanzania"
        }
    }
    return jsonify(data)

if __name__ == "__main__":
    app.run(debug=True)
