package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.processing.Generated("config/web/pcf/shared/assignment/FailedAssignmentsLV.Matter.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class FailedAssignmentsLV_MatterExpressions {
  @javax.annotation.processing.Generated("config/web/pcf/shared/assignment/FailedAssignmentsLV.Matter.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class FailedAssignmentsLVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on RowIterator at FailedAssignmentsLV.Matter.pcf: line 17, column 39
    function value_15 () : entity.Assignable[] {
      return AssignmentPopup.getFailedAssignables()
    }
    
    // 'type' attribute on RowIterator at FailedAssignmentsLV.Matter.pcf: line 17, column 39
    function verifyIteratorType_16 () : void {
      var entry : entity.Assignable = null
      var typedEntry : Matter
      // If this cast fails to compile then the type specified by the 'type' attribute on
      // 'RowIterator' is not compatible with the member type of the 'valueType' attribute
      typedEntry = entry as Matter
    }
    
    property get AssignmentPopup () : gw.api.assignment.AssignmentPopup {
      return getRequireValue("AssignmentPopup", 0) as gw.api.assignment.AssignmentPopup
    }
    
    property set AssignmentPopup ($arg :  gw.api.assignment.AssignmentPopup) {
      setRequireValue("AssignmentPopup", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.processing.Generated("config/web/pcf/shared/assignment/FailedAssignmentsLV.Matter.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends FailedAssignmentsLVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=ABContactMatters_ClaimNumber_Cell) at FailedAssignmentsLV.Matter.pcf: line 25, column 25
    function valueRoot_1 () : java.lang.Object {
      return Matter.Claim
    }
    
    // 'value' attribute on TextCell (id=Matters_Name_Cell) at FailedAssignmentsLV.Matter.pcf: line 31, column 32
    function valueRoot_4 () : java.lang.Object {
      return Matter
    }
    
    // 'value' attribute on TextCell (id=ABContactMatters_ClaimNumber_Cell) at FailedAssignmentsLV.Matter.pcf: line 25, column 25
    function value_0 () : java.lang.String {
      return Matter.Claim.ClaimNumber
    }
    
    // 'value' attribute on DateCell (id=Matters_TrialDate_Cell) at FailedAssignmentsLV.Matter.pcf: line 48, column 37
    function value_12 () : java.util.Date {
      return Matter.TrialDate
    }
    
    // 'value' attribute on TextCell (id=Matters_Name_Cell) at FailedAssignmentsLV.Matter.pcf: line 31, column 32
    function value_3 () : java.lang.String {
      return Matter.Name
    }
    
    // 'value' attribute on TextCell (id=Matters_CaseNumber_Cell) at FailedAssignmentsLV.Matter.pcf: line 36, column 38
    function value_6 () : java.lang.String {
      return Matter.CaseNumber
    }
    
    // 'value' attribute on CurrencyCell (id=Matters_EstSettleCost_Cell) at FailedAssignmentsLV.Matter.pcf: line 42, column 43
    function value_9 () : gw.api.financials.CurrencyAmount {
      return Matter.FinalSettleCost
    }
    
    property get Matter () : Matter {
      return getIteratedValue(1) as Matter
    }
    
    
  }
  
  
}