import React, {useState} from 'react'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';




const useStyles = makeStyles({
    card: {
      maxWidth: 345,
    },
    media: {
      height: 140,
    },
  });

export default function QuestionCard(props) {
    const classes = useStyles();

    const [answer, setAnswer] = useState("")

    function handleClickRight(){
        setAnswer(0)
    }

    function handleClickWrong(){
        setAnswer(1)
    }


    if (answer === ""){
        return (
            <Card className={classes.card}>
          <CardActionArea>
            <CardContent>
              <Typography>
                  {props.question.question}
              </Typography>
              <p>Richtig oder Falsch?</p>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button onClick={handleClickRight} size="small" color="primary">
              Richtig
            </Button>
            <Button onClick={handleClickWrong} size="small" color="primary">
              Falsch
            </Button>
          </CardActions>
        </Card>
        )
    }
    if(answer === props.question.answer){
        return (
            <div>
                <Typography>RICHTIG!!!</Typography>
                <p>Werfen Sie vielleicht mal einen Blick auf den News Slider oben.</p>
                <p>Hier finden Sie aktuelle News aus dem Bereich Wirtschaft. </p>
            </div>
            )
    }
    else{
        return (
            <div>
                <Typography>Falsch...</Typography>
                <p>Werfen Sie vielleicht mal einen Blick auf den News Slider oben.</p>
                <p>Hier finden Sie aktuelle News aus dem Bereich Wirtschaft. </p>
            </div>
            )
        }
    
}
