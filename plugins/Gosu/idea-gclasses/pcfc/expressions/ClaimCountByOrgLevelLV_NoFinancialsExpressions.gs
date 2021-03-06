package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.processing.Generated("config/web/pcf/dashboard/ClaimCountByOrgLevelLV.NoFinancials.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class ClaimCountByOrgLevelLV_NoFinancialsExpressions {
  @javax.annotation.processing.Generated("config/web/pcf/dashboard/ClaimCountByOrgLevelLV.NoFinancials.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ClaimCountByOrgLevelLVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=ByOrgLevel_Cell) at ClaimCountByOrgLevelLV.NoFinancials.pcf: line 23, column 53
    function sortValue_0 (DashboardStats :  entity.DashboardStats) : java.lang.Object {
      return DashboardStats.Group.DisplayName
    }
    
    // 'value' attribute on TextCell (id=ClaimCount_OpenExposures_Cell) at ClaimCountByOrgLevelLV.NoFinancials.pcf: line 29, column 42
    function sortValue_1 (DashboardStats :  entity.DashboardStats) : java.lang.Object {
      return DashboardStats.OpenExposures
    }
    
    // 'value' attribute on TextCell (id=ClaimCount_OpenClaims_Cell) at ClaimCountByOrgLevelLV.NoFinancials.pcf: line 35, column 42
    function sortValue_2 (DashboardStats :  entity.DashboardStats) : java.lang.Object {
      return DashboardStats.OpenClaims
    }
    
    // 'value' attribute on TextCell (id=ClaimCount_Handlers_Cell) at ClaimCountByOrgLevelLV.NoFinancials.pcf: line 41, column 42
    function sortValue_3 (DashboardStats :  entity.DashboardStats) : java.lang.Object {
      return DashboardStats.Handlers
    }
    
    // 'value' attribute on TextCell (id=ClaimCount_AvgPending_Cell) at ClaimCountByOrgLevelLV.NoFinancials.pcf: line 47, column 41
    function sortValue_4 (DashboardStats :  entity.DashboardStats) : java.lang.Object {
      return DashboardStats.AvgPending
    }
    
    // 'value' attribute on TextCell (id=ClaimCount_NoticeOnly_Cell) at ClaimCountByOrgLevelLV.NoFinancials.pcf: line 53, column 42
    function sortValue_5 (DashboardStats :  entity.DashboardStats) : java.lang.Object {
      return DashboardStats.NoticeOnly
    }
    
    // 'value' attribute on TextCell (id=ClaimCount_Flagged_Cell) at ClaimCountByOrgLevelLV.NoFinancials.pcf: line 59, column 42
    function sortValue_6 (DashboardStats :  entity.DashboardStats) : java.lang.Object {
      return DashboardStats.Flagged
    }
    
    // 'value' attribute on TextCell (id=ClaimCount_Litigated_Cell) at ClaimCountByOrgLevelLV.NoFinancials.pcf: line 65, column 42
    function sortValue_7 (DashboardStats :  entity.DashboardStats) : java.lang.Object {
      return DashboardStats.Litigated
    }
    
    // 'value' attribute on RowIterator at ClaimCountByOrgLevelLV.NoFinancials.pcf: line 17, column 43
    function value_32 () : entity.DashboardStats[] {
      return DashboardStatsList
    }
    
    property get DashboardStatsList () : DashboardStats[] {
      return getRequireValue("DashboardStatsList", 0) as DashboardStats[]
    }
    
    property set DashboardStatsList ($arg :  DashboardStats[]) {
      setRequireValue("DashboardStatsList", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.processing.Generated("config/web/pcf/dashboard/ClaimCountByOrgLevelLV.NoFinancials.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends ClaimCountByOrgLevelLVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=ClaimCount_OpenExposures_Cell) at ClaimCountByOrgLevelLV.NoFinancials.pcf: line 29, column 42
    function valueRoot_12 () : java.lang.Object {
      return DashboardStats
    }
    
    // 'value' attribute on TextCell (id=ByOrgLevel_Cell) at ClaimCountByOrgLevelLV.NoFinancials.pcf: line 23, column 53
    function valueRoot_9 () : java.lang.Object {
      return DashboardStats.Group
    }
    
    // 'value' attribute on TextCell (id=ClaimCount_OpenExposures_Cell) at ClaimCountByOrgLevelLV.NoFinancials.pcf: line 29, column 42
    function value_11 () : java.lang.Integer {
      return DashboardStats.OpenExposures
    }
    
    // 'value' attribute on TextCell (id=ClaimCount_OpenClaims_Cell) at ClaimCountByOrgLevelLV.NoFinancials.pcf: line 35, column 42
    function value_14 () : java.lang.Integer {
      return DashboardStats.OpenClaims
    }
    
    // 'value' attribute on TextCell (id=ClaimCount_Handlers_Cell) at ClaimCountByOrgLevelLV.NoFinancials.pcf: line 41, column 42
    function value_17 () : java.lang.Integer {
      return DashboardStats.Handlers
    }
    
    // 'value' attribute on TextCell (id=ClaimCount_AvgPending_Cell) at ClaimCountByOrgLevelLV.NoFinancials.pcf: line 47, column 41
    function value_20 () : java.lang.Double {
      return DashboardStats.AvgPending
    }
    
    // 'value' attribute on TextCell (id=ClaimCount_NoticeOnly_Cell) at ClaimCountByOrgLevelLV.NoFinancials.pcf: line 53, column 42
    function value_23 () : java.lang.Integer {
      return DashboardStats.NoticeOnly
    }
    
    // 'value' attribute on TextCell (id=ClaimCount_Flagged_Cell) at ClaimCountByOrgLevelLV.NoFinancials.pcf: line 59, column 42
    function value_26 () : java.lang.Integer {
      return DashboardStats.Flagged
    }
    
    // 'value' attribute on TextCell (id=ClaimCount_Litigated_Cell) at ClaimCountByOrgLevelLV.NoFinancials.pcf: line 65, column 42
    function value_29 () : java.lang.Integer {
      return DashboardStats.Litigated
    }
    
    // 'value' attribute on TextCell (id=ByOrgLevel_Cell) at ClaimCountByOrgLevelLV.NoFinancials.pcf: line 23, column 53
    function value_8 () : java.lang.String {
      return DashboardStats.Group.DisplayName
    }
    
    property get DashboardStats () : entity.DashboardStats {
      return getIteratedValue(1) as entity.DashboardStats
    }
    
    
  }
  
  
}