"use server";

import { startsWithNumber } from "@/lib/utils";
import { db } from "@/db";


export const addCollection = async ( collectionName: string) => {
  if(collectionName.includes('-')) {
    return {
      error: "Cannot include -"
    }
  
  }

    const collectionNameLower = collectionName.toLowerCase().split(' ' || '-').join('_');
    const STARTS_BY_NUMBER = startsWithNumber(collectionNameLower);
    
    try {

      if(STARTS_BY_NUMBER === true) {
        return {
          error: "Cannot starts with a number"
        }
      } else {

      
  



        
       (await db).createCollection(
            collectionNameLower,
            {
              "vector": {
                "dimension": 5,
                "metric": "cosine"
              }
            }
          );



        return {
            success: 'OK'
        }

      }
    } catch (error) {
        return {
            error: "Something went wrong"
        }
        
    }


}


