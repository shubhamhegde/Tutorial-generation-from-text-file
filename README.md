# Tutorial generation
* Automatic tutorial generation from an input text file (PDF or txt).
* Creation of a ‘generator’ - ‘subscriber’ model.
* Generation of a navigable tutorial with voiceover, a downloadable presentation with voiceover, a topic-subtopic hierarchy and periodic assessments.
* Implementation of User-progress tracker.
# Installation Guide
 1. Pre-requisites:\
  a. python3\
  b. node.js\
  c. java
 2. Clone the git repository with the following command:\
  git clone https://github.com/KritikaKapoor13/Tutorial-generation-from-text-file.git \
  cd Tutorial-generation-from-text-file
 3. Create a virtual environment and activate it with the following commands:\
  python3 -m venv env\
  source env/bin/activate
 4. Setup ReactJS for frontend. First delete the existing node-modules and install them
 with node.js by following these commands:\
  cd frontend/new-ui/\
  rm -rf node_modules\
  rm package-lock.json\
  npm install\
  npm install react-scripts --save\
  npm start\
 Navigate to localhost:3000 to view the frontend. However, the backend is not yet
 setup and hence you cannot navigate right now.
 5. Setup flask for backend and download the necessary files with the following
 commands:\
  cd ../../backend/Create-tutorials-from-text-file/scripts/\
  pip install -r requirements.txt
 6. Some additional packages need to be downloaded with the following commands :\
  python3 -m spacy download en_core_web_sm\
  wget
  https://github.com/explosion/sense2vec/releases/download/v1.0.0/s2v_reddit_2015_m
  d.tar.gz\
  tar -xvf s2v_reddit_2015_md.tar.gz
 7. Run the backend in another terminal with the following command :\
  python3 trial.py\
  Installation is complete. You can now access your application at localhost:3000
