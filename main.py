import requests;
import os;
from bs4 import BeautifulSoup;
from dotenv import load_dotenv;

load_dotenv(); 

ytb_key = os.environ.get("KEY"); 

def main(): 
  print(ytb_key); 
  


main()