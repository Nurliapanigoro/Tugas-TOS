import java.util.Scanner;
   
class SegitigaAngka {
  public static void main(String args[]){
            
    Scanner input = new Scanner(System.in);
       
    System.out.println("##  Program Java Segitiga Angka  ##");
    System.out.println("===================================");
    System.out.println();
     
    int tinggi_segitiga,i,j;
  
    System.out.print("Input tinggi segitiga: ");
    tinggi_segitiga = input.nextInt();
     
    System.out.println();
    
    for(i=1; i<=tinggi_segitiga; i++) {
      for(j=1; j<=i; j++) {
        System.out.print(i+" ");
      }
      System.out.println();
    }
     
  }
}


// langkah 3

// langkah 2


import java.util.Scanner;
   
class SegitigaAngka {
  public static void main(String args[]){
            
    Scanner input = new Scanner(System.in);
       
    System.out.println("##  Program Java Segitiga Angka  ##");
    System.out.println("===================================");
    System.out.println();
     

    int tinggi_segitiga,i,j,k = 0;

    int tinggi_segitiga,i,j;

  
    System.out.print("Input tinggi segitiga: ");
    tinggi_segitiga = input.nextInt();
     
    System.out.println();
    
    for(i=1; i<=tinggi_segitiga; i++) {
      for(j=1; j<=i; j++) {

        k++;
        System.out.print(k+" ");

        System.out.print(j+" ");

      }
      System.out.println();
    }
     
  }
}
