/** A person related to a one pager. */
export interface OnePagerPerson {
  name: string;
  title: string;
  description?: string;
  email: string;
}

/** Public access one pager data fields. */
export interface OnePagerPublicData {
  logo: string;
  companyName: string;
  url: string;
  industryTags: string[];
  briefDescription: string;
}

/** Full one pager data model. */
export interface OnePagerData {
  logo: string;
  companyName: string;
  url: string;
  industryTags: string[];
  briefDescription: string;
  detailDescription?: string;
  founders: OnePagerPerson[];
  fundraisingStage?: string;
  fundraisingStageGoal?: number;
  fundsRaisedInStage?: number;
  fundraisingDetails?: string;
  pitchVideoLink?: string;
  investors?: OnePagerPerson[];
}
