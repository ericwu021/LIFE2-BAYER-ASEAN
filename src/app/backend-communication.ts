export class Time_backend
{
  time:string;
  cwid:string;

  constructor(cwid,time)

    {

      this.cwid = cwid;
      this.time = time;

    }

};

export class Rank_backend
{

  cwid:string;
  seconds:number;
  rank:number;

  constructor(rank,cwid,seconds)

    {

      this.cwid = cwid;
      this.seconds = seconds;
      this.rank = rank;

    }

}
