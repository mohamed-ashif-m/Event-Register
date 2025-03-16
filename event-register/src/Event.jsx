import { useState } from 'react'
import './App.css'
import '../../bootstrap-5.3.3-dist/bootstrap-5.3.3-dist/css/bootstrap.min.css'
function Event(){
    return(
        <>
            <div className="container w-100">
      <div className="row my-5 g-4">
        <div className="col-sm-12 col-md-6 col-lg-4 wid">
          <div className="p-3 rounded-4 hei tech-1">
            <h3 id="com-tit-6" className="com-det">Quizzie-Buzzie:</h3>
            <h4 id="com-tit1-6" className="com-det">Technical</h4>
            <p id="com-des-6" className="com-det">
              Engage in a battle of wits and tech knowledge as you tackle
              mind-bending questions in our lightning-fast quiz. From coding
              concepts to industry insights, Quizzie-Buzzie promises an
              adrenaline-pumping challenge for tech enthusiasts! Participants
              must answer multiple-choice questions within a set time limit. No
              use of external resources or devices is allowed during the quiz.
            </p>
            <button className="btn-2">Know More</button>
          </div>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-4 wid">
          <div className="p-3 rounded-4 hei tech-2">
            <h3 id="com-tit-4" className="com-det">Tech-It-Out:</h3>
            <h4 id="com-tit1-4" className="com-det">Technical</h4>
            <p id="com-des-4" className="com-det">
              Step onto the innovation stage and present your tech marvels, be
              it groundbreaking ideas, cutting-edge research, or visionary
              startup pitches. Tech-IT-Out is your chance to shine, connect with
              industry leaders, and turn your concepts into reality.
              Presentations must adhere to a strict time limit allocated for
              each participant or team. Visual aids such as slideshows or
              prototypes are encouraged to enhance the presentation.
            </p>
            <button className="btn-2">Know More</button>
          </div>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-4 wid">
          <div className="p-3 rounded-4 hei tech-1">
            <h3 id="com-tit-5" className="com-det">ParaCoding:</h3>
            <h4 id="com-tit1-5" className="com-det">Technical</h4>
            <p id="com-des-5" className="com-det">
              Embark on a coding expedition where you'll crack algorithms, debug
              solutions, and code your way through complex challenges.
              Paracoding is where the digital world meets problem-solving
              prowess, testing your coding mettle like never before. Teams( max
              2 members ) will be given a coding problem and a specified
              timeframe to solve it. Code submissions must follow the specified
              programming language and meet the problem's requirements.
            </p>
            <button className="btn-2">Know More</button>
          </div>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-4 wid">
            <div className="p-3 rounded-4 hei non-tech-1">
          <h3 id="com-tit" className="com-det">Poster Design:</h3>
          <h4 id="com-tit1" className="com-det">Non-Technical</h4>
          <p id="com-des" className="com-det">
            Unleash your artistic flair in a whirlwind poster design challenge.
            With themes unveiled on the spot, create visually stunning posters
            that capture attention, convey messages, and showcase your design
            finesse under pressure. Handmade posters must be created on-site
            based on the theme announced. Participants must bring their own art
            supplies, and digital editing tools are not permitted.
          </p>
          <button className="btn-2">Know More</button>
        </div>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-4 wid">
            <div className="p-3 rounded-4 hei non-tech-2">
          <h3 id="com-tit-2" className="com-det">Loop Action:</h3>
          <h4 id="com-tit1-2" className="com-det">Non-Technical</h4>
          <p id="com-des-2" className="com-det">
            Collaborate, strategize, and execute flawlessly in Loop action,
            where teams navigate a series of synchronized tasks. From
            coordination to precision, conquer challenges together and emerge as
            champions of seamless teamwork. Teams will receive a sequence of
            tasks that must be completed in the given order. Actions should be
            performed accurately and swiftly, with penalties for incorrect or
            out-of-sequence tasks.
          </p>
          <button className="btn-2">Know More</button>
        </div>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-4 wid">
            <div className="p-3 rounded-4 hei non-tech-1">
          <h3 id="com-tit-3" className="com-det">Beat Break:</h3>
          <h4 id="com-tit1-3" className="com-det">Non-Technical</h4>
          <p id="com-des-3" className="com-det">
            The song should be continued when the lyrics fades off. Each
            participants can participate individually or atmost 2. Participants
            who find max lyrics from the songs will be a winner. Participants
            can skip maximum of 3 songs.
          </p>
          <button className="btn-2">Know More</button>
          </div>
        </div>
      </div>
    </div>
        </>
    );
}

export default Event