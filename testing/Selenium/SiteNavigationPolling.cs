using System;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using OpenQA.Selenium;
using OpenQA.Selenium.Firefox;
using OpenQA.Selenium.Chrome;
using OpenQA.Selenium.Support.UI;

namespace WebDriverTestProject2
{
    [TestClass]
    public class SiteNavigation
    {

        IWebDriver driverOne = new FirefoxDriver();



        [TestMethod]
        public void NavigateToUrl()
        {
            driverOne.Navigate().GoToUrl("https://bransfieldjack.github.io/"); //Navigate to the website.
            WebDriverWait wait = new WebDriverWait(driverOne, 40);
            wait.Until(ExpectedConditions.ElementToBeClickable("menu-toggle"));
            btnNewSalesOrser.click();
        }

        [TestCleanup]
        public void CompletionMessage()
        {
            Console.WriteLine("Test completed with success. ");
        }
    }
}
