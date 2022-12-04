let sql= `SELECT monsters.id,
         arms.filename,
          legs.filename,
          body.filename,
          eyes.filename,
          mouth.filename,
          nose.filename
           FROM monsters 
        LEFT JOIN bodyparts AS arms ON arms.id = monsters.arm_id
        LEFT JOIN bodyparts AS legs ON legs.id = monsters.leg_id
        LEFT JOIN bodyparts AS body ON body.id = monsters.body_id
        LEFT JOIN bodyparts AS eyes ON eyes.id = monsters.eye_id
        LEFT JOIN bodyparts AS mouth ON mouth.id = monsters.mouth_id
        LEFT JOIN bodyparts AS nose ON nose.id = monsters.nose_id;`